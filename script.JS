const problems = [
    {
        prompt: "Write a program to calculate the sum of two numbers.",
        solution: "```c\n#include <stdio.h>\n\nint main() {\n    int num1, num2, sum;\n    printf(\"Enter two numbers: \");\n    scanf(\"%d %d\", &num1, &num2);\n    sum = num1 + num2;\n    printf(\"Sum: %d\\n\", sum);\n    return 0;\n}\n```"
    },
    {
        prompt: "Write a program to find the factorial of a number.",
        solution: "```c\n#include <stdio.h>\n\nint factorial(int n) {\n    if (n == 0 || n == 1) {\n        return 1;\n    } else {\n        return n * factorial(n - 1);\n    }\n}\n\nint main() {\n    int num;\n    printf(\"Enter a number: \");\n    scanf(\"%d\", &num);\n    printf(\"Factorial: %d\\n\", factorial(num));\n    return 0;\n}\n```"
    },
    // Add more problems as needed
];

// Function to display the list of problems
function displayProblems() {
    const problemsList = document.getElementById("problems-list");

    problems.forEach((problem, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<span>${index + 1}. ${problem.prompt}</span> <button onclick="solveProblem(${index})">Solve</button>`;
        problemsList.appendChild(listItem);
    });
}

// Function to solve a specific problem
function solveProblem(index) {
    const problem = problems[index];
    const solution = prompt(`Solve the following problem:\n\n${problem.prompt}`);

    if (solution !== null) {
        alert(`Your solution:\n\n${solution}\n\nCorrect solution:\n\n${problem.solution}`);
    }
}

// Initial display of the list of problems
displayProblems();
