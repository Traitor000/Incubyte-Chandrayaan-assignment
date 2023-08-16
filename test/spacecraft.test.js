const spacecraftModule = require('../spacecraft'); 

describe('Spacecraft Control Tests', () => {
  let spacecraft;

  beforeEach(() => {
    spacecraft = spacecraftModule.initializeSpacecraft();
  });

  test('Moving Forward', () => {
    spacecraftModule.moveForward(spacecraft);
    expect(spacecraft.position.y).toBe(1);
  });

  test('Moving Backward', () => {
    spacecraftModule.moveBackward(spacecraft);
    expect(spacecraft.position.y).toBe(-1);
  });

  test('Turning Left from North', () => {
    spacecraftModule.turnLeft(spacecraft);
    expect(spacecraft.direction).toBe('W');
  });

  test('Turning Right from West', () => {
    spacecraft.direction = 'W';
    spacecraftModule.turnRight(spacecraft);
    expect(spacecraft.direction).toBe('N');
  });

  test('Turning Up from North', () => {
    spacecraftModule.turnUp(spacecraft);
    expect(spacecraft.direction).toBe('Up');
  });

  test('Turning Down from North', () => {
    spacecraftModule.turnDown(spacecraft);
    expect(spacecraft.direction).toBe('Down');
  });


});
