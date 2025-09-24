#!/bin/sh
# Replace backend URL in JS bundle
if [ -n "$REACT_APP_BACKEND_URL" ]; then
  echo "Replacing backend URL with $REACT_APP_BACKEND_URL"
  find /app/build/static/js -name "*.js" -exec sed -i "s|http://localhost:8000|$REACT_APP_BACKEND_URL|g" {} +
fi

# Start serve
serve -s build -l 3000