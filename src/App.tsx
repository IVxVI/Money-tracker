import { useMemo, useState } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage';
import { createExpence } from './helpers/createExpence';
import { createIncome } from './helpers/createIncome';
import { ExpenceItem } from './types/ExpenceItem';
import { Header } from './components/Header/Header';
import { Form } from './components/Form/Form';
import { Footer } from './components/Footer/Footer';
import { IncomeItem } from './types/IncomeItem';
import { Info } from './components/Info/Info';
import { PaginationMain } from './components/Pagination/PaginationMain';
import { FilterType } from './types/FilterType';
import { UserAmountModal } from './components/UserAmountModal/UserAmountModal';
import './styles/App.scss';

function App() {
  const [userAmount, setUserAmount] = useLocalStorage('userAmount', 0);
  const [isSubmited, setIsSubmited] = useLocalStorage('isSubmited', false);
  const [mainAmount, setMainAmount] = useLocalStorage('itemAmount', userAmount);
  const [expencesStorage, setExpencesStorage] = useLocalStorage('expencesStorage', 0);
  const [incomesStorage, setIncomesStorage] = useLocalStorage('incomesStorage', 0);
  const [collection, setCollection] = useLocalStorage('initialCollection', []);
  const [itemTitle, setItemTitle] = useState('');
  const [itemAmount, setItemAmount] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [filterType, setFilterType] = useState(FilterType.All);

  const handleExpences = (event: React.FormEvent) => {
    event.preventDefault();

    if (!itemTitle.length || !itemAmount.length) {
      return;
    }

    const newExpence = createExpence(itemTitle, +itemAmount, mainAmount);
    setMainAmount(mainAmount - newExpence.amount);
    setExpencesStorage(expencesStorage + newExpence.amount);
    newExpence.createdAt = new Date().toLocaleString();
    setCollection([...collection, newExpence])
    setItemTitle('');
    setItemAmount('');
  }

  const handleIncomes = (event: React.FormEvent) => {
    event.preventDefault();

    if (!itemTitle.length || !itemAmount.length) {
      return;
    }

    const newIncome = createIncome(itemTitle, +itemAmount);
    setMainAmount(mainAmount + newIncome.amount);
    setIncomesStorage(incomesStorage + newIncome.amount);

    newIncome.createdAt = new Date().toLocaleString();
    setCollection([...collection, newIncome])
    setItemTitle('');
    setItemAmount('');
  }

  const handleExpencesRemoval = (id: number) => {
    setCollection(collection.filter((expenceItem: ExpenceItem) => {
      setMainAmount(mainAmount + expenceItem.amount);
      return expenceItem.id !== id;
    }));
  }

  const handleIncomesRemoval = (id: number) => {
    setCollection(collection.filter((incomeItem: IncomeItem) => {
      setMainAmount(mainAmount - incomeItem.amount);
      return incomeItem.id !== id;
    }));
  }

  const handleReset = () => {
    setMainAmount(0);
    setCollection([]);
  }

  const handleEdit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter') {
      setIsEditing(!isEditing);
    }
  }

  const filteredItems = useMemo(() => {
    switch (filterType) {
      case FilterType.Expences:
        return collection.filter((item: ExpenceItem) => item.category === 'expences');

      case FilterType.Incomes:
        return collection.filter((item: IncomeItem) => item.category === 'incomes');

      default:
        return collection;
    }
  }, [collection, filterType]);

  if(!isSubmited) {
    return (
      <UserAmountModal 
        setUserAmount={setUserAmount}
        setIsSubmited={setIsSubmited}
      />
    )
  }

  return (
    <div className="App">
      <div className="App__header">
        <Header />
      </div>

      <div className="App__main">
        <div className="App__main-block">
          <Info
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            mainAmount={mainAmount}
            handleEdit={handleEdit}
            setMainAmount={setMainAmount}
            userAmount={userAmount}
            incomesStorage={incomesStorage}
            setExpencesStorage={setExpencesStorage}
            setIncomesStorage={setIncomesStorage}
            expencesStorage={expencesStorage}
          />
        </div>

        <div className="App__main-block">
          <Form
            handleExpences={handleExpences}
            handleIncomes={handleIncomes}
            itemTitle={itemTitle}
            setItemTitle={setItemTitle}
            itemAmount={itemAmount}
            setItemAmount={setItemAmount}
          />
        </div>
      </div>

      {collection.length > 0 && (
        <div className="box">
          <PaginationMain
            collection={filteredItems}
            handleExpencesRemoval={handleExpencesRemoval}
            handleIncomesRemoval={handleIncomesRemoval}
          />

          <Footer 
            handleReset={handleReset}
            filterType={filterType}
            setFilterType={setFilterType}
          />
        </div>
      )}
    </div>
  )
}

export default App
