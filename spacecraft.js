const positionElement = document.getElementById('position');
const directionElement = document.getElementById('direction');
const executeButton = document.getElementById('execute');

const spacecraft = {
  position: { x: 0, y: 0, z: 0 },
  direction: 'N',
};

function executeCommands(commands) {
  commands.forEach(command => {
    switch (command) {
      case 'f':
        moveForward();
        break;
      case 'b':
        moveBackward();
        break;
      case 'l':
        turnLeft();
        break;
      case 'r':
        turnRight();
        break;
      case 'u':
        turnUp();
        break;
      case 'd':
        turnDown();
        break;
    }
    updateUI();
  });
}

function moveForward() {
    switch (spacecraft.direction) {
      case 'N':
        spacecraft.position.y += 1;
        break;
      case 'S':
        spacecraft.position.y -= 1;
        break;
      case 'E':
        spacecraft.position.x += 1;
        break;
      case 'W':
        spacecraft.position.x -= 1;
        break;
      case 'Up':
        spacecraft.position.z += 1;
        break;
      case 'Down':
        spacecraft.position.z -= 1;
        break;
    }
  }
  
  function moveBackward() {
    switch (spacecraft.direction) {
      case 'N':
        spacecraft.position.y -= 1;
        break;
      case 'S':
        spacecraft.position.y += 1;
        break;
      case 'E':
        spacecraft.position.x -= 1;
        break;
      case 'W':
        spacecraft.position.x += 1;
        break;
      case 'Up':
        spacecraft.position.z -= 1;
        break;
      case 'Down':
        spacecraft.position.z += 1;
        break;
    }
  }
  
  function turnLeft() {
    switch (spacecraft.direction) {
      case 'N':
        spacecraft.direction = 'W';
        break;
      case 'S':
        spacecraft.direction = 'E';
        break;
      case 'E':
        spacecraft.direction = 'N';
        break;
      case 'W':
        spacecraft.direction = 'S';
        break;
    }
  }
  
  function turnRight() {
    switch (spacecraft.direction) {
      case 'N':
        spacecraft.direction = 'E';
        break;
      case 'S':
        spacecraft.direction = 'W';
        break;
      case 'E':
        spacecraft.direction = 'S';
        break;
      case 'W':
        spacecraft.direction = 'N';
        break;
    }
  }
  
  function turnUp() {
    if (spacecraft.direction !== 'Up') {
      spacecraft.direction = 'Up';
    }
  }
  
  function turnDown() {
    if (spacecraft.direction !== 'Down') {
      spacecraft.direction = 'Down';
    }
  }

function updateUI() {
  positionElement.textContent = `(${spacecraft.position.x}, ${spacecraft.position.y}, ${spacecraft.position.z})`;
  directionElement.textContent = spacecraft.direction;
}

executeButton.addEventListener('click', () => {
    const commandInput = document.getElementById('commandInput');
    const commands = commandInput.value.toLowerCase().split('');
    executeCommands(commands);
  });
