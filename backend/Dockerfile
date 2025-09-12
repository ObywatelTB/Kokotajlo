FROM python:3.12-slim

# Set environment variables
ENV PYTHONUNBUFFERED=1 \
    POETRY_VERSION=1.8.3 \
    POETRY_HOME="/opt/poetry" \
    POETRY_VIRTUALENVS_IN_PROJECT=true \
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

WORKDIR $PYSETUP_PATH
COPY pyproject.toml poetry.lock ./
# Install dependencies without project code
RUN poetry install --no-root --no-dev

WORKDIR /app
COPY . /app
# Install project as package
RUN poetry install --only-root

# Debug: Verify venv and python executable
RUN ls -la $VENV_PATH/bin && \
    test -f $VENV_PATH/bin/python && echo "Python executable found" || echo "Python executable missing"

EXPOSE $PORT
CMD ["poetry", "run", "python", "main.py"]