# Justfile for texas-st-casa.github.io development tasks

# Default recipe to display available commands
default:
    @just --list

# Install dependencies
install:
    npm install

# Start development server
dev:
    npm run dev

# Build for production
build:
    npm run build

# Preview production build
preview:
    npm run preview

# Run linter
lint:
    npm run lint

# Run linter and fix issues
lint-fix:
    npm run lint -- --fix

# Clean build artifacts
clean:
    rm -rf dist

# Clean all generated files including node_modules
clean-all:
    rm -rf dist node_modules

# Run type checking
typecheck:
    npx tsc --noEmit

# Full check: lint + typecheck + build
check: lint typecheck build
    @echo "All checks passed!"

# Setup project from scratch
setup: install
    @echo "Project setup complete! Run 'just dev' to start development."
