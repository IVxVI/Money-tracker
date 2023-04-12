import { ExpenceItem } from "../../types/ExpenceItem";
import { IncomeItem } from "../../types/IncomeItem";
import { ExpenceBox } from "../ExpenceBox/ExpenceBox";
import './Body.scss';

type Props = {
  collection: ExpenceItem[] | IncomeItem[],
  onExpencesDelete: (index: number) => void,
  onIncomesDelete: (index: number) => void,
}

export const Body: React.FC<Props> = ({ collection, onExpencesDelete, onIncomesDelete }) => {
  return (
    <section className="body">
      {collection.map(expenceItem => (
        <ExpenceBox 
          item={expenceItem} 
          key={expenceItem.id} 
          onExpencesDelete={(id: number) => onExpencesDelete(id)}
          onIncomesDelete={(id: number) => onIncomesDelete(id)}
        />
      ))}
    </section>
  )
}