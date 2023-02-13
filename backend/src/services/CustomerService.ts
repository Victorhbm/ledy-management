import { StatusCodes } from 'http-status-codes';
import Customer from '../database/models/Customer';
import { ICustomer } from '../interfaces/ICustomer';

class CustomerService {
  public async create(customerData: ICustomer) {
    const {
      name,
      CPF,
      email,
      phoneNumber,
      state,
      city,
      neighborhood,
      address,
      birthdate,
    } = customerData;
    const createdCustomer = await Customer.create({
      name,
      CPF,
      email,
      phoneNumber,
      state,
      city,
      neighborhood,
      address,
      birthdate,
    });

    return createdCustomer;
  }

  public async getAll() {
    const getAllCustomers = await Customer.findAll();

    return getAllCustomers;
  }

  public async getById(id: number) {
    const getCustomerById = await Customer.findByPk(id);

    return getCustomerById
      ? { code: StatusCodes.OK, data: getCustomerById }
      : {
          code: StatusCodes.NOT_FOUND,
          data: { message: 'Customer not found' },
        };
  }

  public async update(id: number, customerData: ICustomer) {
    const getCostumer = await Customer.findByPk(id);

    if (!getCostumer)
      return { code: StatusCodes.NOT_FOUND, message: 'Customer not found' };

    await Customer.update(customerData, { where: { id } });

    return { code: StatusCodes.OK, message: 'Sucessfully updated' };
  }

  public async delete(id: number) {
    await Customer.destroy({ where: { id } });
  }
}

export default new CustomerService();
