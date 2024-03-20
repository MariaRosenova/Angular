// Import your classes (assuming they are in the same file or module)
import { Junior, Senior, Manager } from './people';

// Create instances of each type of employee
const juniorEmployee = new Junior('John Doe', 25);
const seniorEmployee = new Senior('Alice Smith', 35);
const managerEmployee = new Manager('Bob Johnson', 45);

// Work and collect salary for each employee
juniorEmployee.work();
juniorEmployee.getSalary();
juniorEmployee.collectSalary();

seniorEmployee.work();
seniorEmployee.collectSalary();

managerEmployee.work();
managerEmployee.collectSalary();
