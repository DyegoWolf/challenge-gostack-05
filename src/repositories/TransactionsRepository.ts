import Transaction from '../models/Transaction';

interface CreateTransactionDTO {
  title: string;
  type: 'income' | 'outcome';
  value: number;
}

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return(this.transactions);
  }

  public getBalance(): Balance {
    // Soma dos valores de entrada
    const income = this.transactions.reduce((accumulator, transactions) => {
      if(transactions.type == 'income'){
        accumulator += transactions.value;
      }

      return(accumulator);
    }, 0);

    // Soma dos valores de saída
    const outcome = this.transactions.reduce((accumulator, transactions) => {
      if(transactions.type == 'outcome'){
        accumulator += transactions.value;
      }

      return(accumulator);
    }, 0);

    // Gasto total
    const total = income - outcome;

    return({income, outcome, total});
  }

  public create({title, type, value}: CreateTransactionDTO): Transaction {
    const newTransaction = new Transaction({title, type, value});

    this.transactions.push(newTransaction);

    return(newTransaction);
  }
}

export default TransactionsRepository;
