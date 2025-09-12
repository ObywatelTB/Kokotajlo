"""
Railway JSON Logging Configuration
Custom structured logging for Railway deployment compatibility
"""

import os
import logging
import json
import sys
from datetime import datetime


class RailwayJSONFormatter(logging.Formatter):
    """Custom JSON formatter for Railway logs."""

    def format(self, record):
        # Create the log entry
        log_entry = {
            "level": record.levelname.lower(),
            "message": record.getMessage(),
            "timestamp": datetime.fromtimestamp(record.created).isoformat() + "Z",
            "logger": record.name,
            "module": record.module,
            "function": record.funcName,
            "line": record.lineno
        }

        # Add exception info if present
        if record.exc_info:
            log_entry["exception"] = self.formatException(record.exc_info)

        return json.dumps(log_entry)


def setup_railway_logging():
    """
    Configure JSON structured logging for Railway compatibility.

    Returns:
        tuple: (logger, console_handler, log_level)
    """
    # Configure logging
    log_level = getattr(logging, os.getenv("LOG_LEVEL", "INFO").upper())

    # Create logger
    logger = logging.getLogger(__name__)
    logger.setLevel(log_level)

    # Remove any existing handlers
    for handler in logger.handlers[:]:
        logger.removeHandler(handler)

    # Create console handler with Railway JSON formatter
    console_handler = logging.StreamHandler(sys.stdout)
    console_handler.setLevel(log_level)
    console_handler.setFormatter(RailwayJSONFormatter())

    # Add handler to root logger so all logs are formatted consistently
    root_logger = logging.getLogger()
    root_logger.setLevel(log_level)
    root_logger.handlers.clear()
    root_logger.addHandler(console_handler)

    # Test the logging format on startup
    logger.info("Railway JSON logging initialized successfully")
    logger.debug("Debug logging enabled")
    logger.warning("This is a warning message for testing")

    return logger, console_handler, log_level


def configure_uvicorn_logging(console_handler):
    """
    Configure uvicorn to use the same JSON formatter.

    Args:
        console_handler: The logging handler to apply to uvicorn loggers
    """
    # Override uvicorn's default loggers to use our formatter
    uvicorn_loggers = ["uvicorn", "uvicorn.error", "uvicorn.access"]
    for uvicorn_logger_name in uvicorn_loggers:
        uvicorn_logger = logging.getLogger(uvicorn_logger_name)
        uvicorn_logger.handlers.clear()
        uvicorn_logger.addHandler(console_handler)
        uvicorn_logger.setLevel(console_handler.level)


# Export the main logger instance and related variables
logger, console_handler, log_level = setup_railway_logging()

# Make sure console_handler is available globally
__all__ = ['logger', 'console_handler', 'log_level',
           'configure_uvicorn_logging', 'RailwayJSONFormatter']
