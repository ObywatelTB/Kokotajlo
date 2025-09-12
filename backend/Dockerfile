FROM python:3.12-slim

# Set environment variables
ENV PYTHONUNBUFFERED=1 \
    POETRY_VERSION=1.8.3 \
    POETRY_HOME="/opt/poetry" \
    POETRY_NO_INTERACTION=1 \
    PYSETUP_PATH="/opt/pysetup" \
    VENV_PATH="/opt/venv"

ENV PATH="$POETRY_HOME/bin:$VENV_PATH/bin:$PATH"

# Install dependencies
RUN apt-get update && apt-get install --no-install-recommends -y curl build-essential && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Poetry
RUN curl -sSL https://install.python-poetry.org | python3 -

# Verify Poetry installation
RUN poetry --version

# Explicitly create virtual environment
RUN poetry config virtualenvs.create true && \
    poetry config virtualenvs.path /opt/venv && \
    poetry config virtualenvs.in-project true

WORKDIR $PYSETUP_PATH
COPY pyproject.toml poetry.lock ./

# Install dependencies
RUN poetry install --no-root --no-dev --sync || { echo "Poetry install failed"; exit 1; }

WORKDIR /app
COPY . /app

# Install project
RUN poetry install --only-root --sync || { echo "Poetry project install failed"; exit 1; }

# Debug: Verify venv contents and Python executable
RUN ls -la /opt/venv/bin && \
    test -f /opt/venv/bin/python && echo "Python executable found" || echo "Python executable missing"

EXPOSE $PORT
CMD ["poetry", "run", "python", "main.py"]