import { Router } from 'express';
import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();
const transationRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {
    const transactions = transationRepository.all();
    const balances = transationRepository.getBalance();

    return response.json({transactions, balances});
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    const createTransactionService = new CreateTransactionService(transationRepository);

    const {title, type, value} = request.body;
    const newTransaction = createTransactionService.execute({title, type, value});

    return response.json(newTransaction);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
