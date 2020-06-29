import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface RequestDTO{
  title: string;
  type: 'income' | 'outcome';
  value: number;
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({title, type, value}: RequestDTO): Transaction {

    // Não permite criar transação com tipo inválido
    if(type != 'income' && type != 'outcome'){
      throw Error('Invalid type! Must be income or outcome.');
    }

    const {total} = this.transactionsRepository.getBalance();

    if(type == 'outcome' && value > total){
      throw Error('Outcome value extrapoles your finances!');
    }

    const newTransaction = this.transactionsRepository.create({
      title,
      type,
      value
    });

    return(newTransaction);
  }
}

export default CreateTransactionService;
