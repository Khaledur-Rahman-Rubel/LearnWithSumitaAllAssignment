import { useState } from "react";
import BlanceCard from "./BlanceCard";

import {
  defaultExpenseTask,
  defaultIncomeTask,
  expenseCategories,
  incomeCategories,
} from "../assets/data/incomeExpenseList";
import ExpenseList from "./ExpenseList";
import ExpenseTrackerForm from "./ExpenseTrackerForm";
import IncomeList from "./IncomeList";
import IncomeTrackerForm from "./IncomeTrackerForm";

const TaskBord = () => {
  const [expenseTask, setExpenseTask] = useState(defaultExpenseTask);
  const [incomeTask, setIncomeTask] = useState(defaultIncomeTask);
  const [incomeDataUpdate, setIncomeDataUpdate] = useState(null);
  const [expenseDataUpdate, setExpenseDataUpdate] = useState(null);

  const [isActive, setIsActive] = useState(true);

  //Expense add edit delete ...
  const handleAddAndEditExpence = (expense, isAdd) => {
    if (isAdd) {
      setExpenseTask([...expenseTask, expense]);
    } else {
      setExpenseTask(
        expenseTask.map((task) => {
          if (task.id === expense.id) {
            return expense;
          }
          return task;
        })
      );
    }
    setIsActive(false);
    setExpenseDataUpdate(null);
  };

  const handleExpenseEdit = (task) => {
    setExpenseDataUpdate(task);
    setIsActive(true);
  };

  const handleExpenseDelete = (taskId) => {
    setExpenseTask(expenseTask.filter((task) => task.id !== taskId));
  };

  //Income add edit delete ....
  const handleAddAndEditIncome = (income, isAdd) => {
    if (isAdd) {
      setIncomeTask([...incomeTask, income]);
    } else {
      setIncomeTask(
        incomeTask.map((task) => {
          if (task.id === income.id) {
            return income;
          }
          return task;
        })
      );
    }
    setIsActive(true);
    setIncomeDataUpdate(null);
  };

  const handleIncomeEdit = (task) => {
    setIncomeDataUpdate(task);
    setIsActive(false);
  };

  const handleIncomeDelete = (taskId) => {
    setIncomeTask(incomeTask.filter((task) => task.id !== taskId));
  };

  //calculate the total income, total expense, and total balance
  let totalIncome = incomeTask.reduce(
    (total, task) => total + Number(task.amount),
    0
  );

  let totalExpense = expenseTask.reduce(
    (total, task) => total + Number(task.amount),
    0
  );
  const totalBlance = totalIncome - totalExpense;

  return (
    <main className="relative mx-auto mt-10 w-full max-w-7xl">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isActive ? (
          <ExpenseTrackerForm
            onActive={() => setIsActive(false)}
            onSave={handleAddAndEditExpence}
            expenseDataUpdate={expenseDataUpdate}
          />
        ) : (
          <IncomeTrackerForm
            onActive={() => setIsActive(true)}
            onSave={handleAddAndEditIncome}
            incomeDataUpdate={incomeDataUpdate}
          />
        )}

        <div className="lg:col-span-2">
          <BlanceCard
            totalBlance={totalBlance}
            totalExpense={totalExpense}
            totalIncome={totalIncome}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            <IncomeList
              Categories={incomeCategories}
              IncomeTask={incomeTask}
              onEdit={handleIncomeEdit}
              onDelete={handleIncomeDelete}
            />
            <ExpenseList
              Categories={expenseCategories}
              ExpenseTask={expenseTask}
              onEdit={handleExpenseEdit}
              onDelete={handleExpenseDelete}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default TaskBord;
