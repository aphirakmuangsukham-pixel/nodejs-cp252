/**
 * คลาสสำหรับเก็บข้อมูลรายรับรายจ่าย 1 รายการ
 */
class Expense {

  /**
   * สร้าง object รายรับรายจ่าย
   * @param {string|Date} date วันที่ทำรายการ
   * @param {number|string} income จำนวนเงินรายรับ
   * @param {number|string} expense จำนวนเงินรายจ่าย
   * @param {string} detail รายละเอียดของรายการ
   */
  constructor(date, income, expense, detail) {
    this.date = date;
    this.income = parseFloat(income) || 0;   // ถ้าไม่ใช่ตัวเลขให้เป็น 0
    this.expense = parseFloat(expense) || 0; // ถ้าไม่ใช่ตัวเลขให้เป็น 0
    this.detail = detail || '';
  }
}

/**
 * คลาสสำหรับจัดการรายการรายรับรายจ่ายทั้งหมด
 */
class ExpenseModel {

  /**
   * สร้าง model และกำหนด array ว่างไว้เก็บข้อมูล
   */
  constructor() {
    /** @type {Expense[]} */
    this.expenses = [];
  }

  /**
   * เพิ่มรายการเข้าไปในระบบ
   * @param {Expense} expense object รายรับรายจ่าย
   * @returns {void}
   */
  add(expense) {
    this.expenses.push(expense);
  }

  /**
   * ดึงข้อมูลรายการทั้งหมด
   * @returns {Expense[]} รายการทั้งหมดในรูปแบบ array
   */
  getAll() {
    return this.expenses;
  }

  /**
   * คำนวณผลรวมรายรับทั้งหมด
   * @returns {number} ผลรวมรายรับ
   */
  getTotalIncome() {
    return this.expenses.reduce((sum, exp) => sum + exp.income, 0);
  }

  /**
   * คำนวณผลรวมรายจ่ายทั้งหมด
   * @returns {number} ผลรวมรายจ่าย
   */
  getTotalExpense() {
    return this.expenses.reduce((sum, exp) => sum + exp.expense, 0);
  }

  /**
   * คำนวณเงินคงเหลือ (รายรับ - รายจ่าย)
   * @returns {number} จำนวนเงินที่เหลือ
   */
  getMoneyLeft() {
    return this.getTotalIncome() - this.getTotalExpense();
  }
}

module.exports = { Expense, ExpenseModel }; 
/* pepepo */