install: ## Install dependencies
	@echo "Installing npm dependencies"
	@npm prune
	@npm install

dev: install ## Run development
	@echo "Starting development server"
	@npm run dev

build: install ## Build optimized bundle
	@echo "Preparing production bundle"
	@npm run build

.PHONY: help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help
