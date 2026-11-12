const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
    output: process.stdout
    });

    const operations = {
      '+': (a, b) => a + b,
        '-': (a, b) => a - b,
          '*': (a, b) => a * b,
            '/': (a, b) => (b === 0 ? 'Error: Cannot divide by zero' : a / b)
            };

            function usrInput(message) {
              return new Promise((resolve) => {
                  rl.question(message, (answer) => resolve(answer.trim()));
                    });
                    }

                    console.log('NodeJS Simple Calculator');

                    async function startCalcPrompt() {
                      const firstInput = await usrInput('Enter first number: ');
                        const first = Number(firstInput);
                          if (firstInput === '' || Number.isNaN(first)) {
                              console.log('You must enter a valid number.');
                                  rl.close();
                                      return;
                                        }

                                          const secondInput = await usrInput('Enter second number: ');
                                            const second = Number(secondInput);
                                              if (secondInput === '' || Number.isNaN(second)) {
                                                  console.log('You must enter a valid number.');
                                                      rl.close();
                                                          return;
                                                            }

                                                              const operators = Object.keys(operations);
                                                                const operator = await usrInput(`Enter operator [${operators.join(', ')}]: `);
                                                                  if (!Object.hasOwn(operations, operator)) {
                                                                      console.log(`The available operators are: ${operators.join(', ')}`);
                                                                          rl.close();
                                                                              return;
                                                                                }

                                                                                  const result = operations[operator](first, second);
                                                                                    console.log(result);
                                                                                      rl.close();
                                                                                      }

                                                                                      startCalcPrompt();
                                                                                      