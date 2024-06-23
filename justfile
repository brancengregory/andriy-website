# Define a variable for the TailwindCSS input file
tailwind_input := "input.css"

# Define a variable for the TailwindCSS output file
tailwind_output := "static/output.css"

# Task to compile TailwindCSS
tailwind:
    @echo "Compiling TailwindCSS..."
    npx tailwindcss -i {{tailwind_input}} -o {{tailwind_output}} --watch

# Task to watch and rebuild Rust project
watch:
    @echo "Running cargo watch..."
    cargo watch -x run

# Default task to run both TailwindCSS compiler and cargo watch concurrently
dev:
    @echo "Starting development environment..."
    just tailwind & just watch
