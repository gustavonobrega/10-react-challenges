import AccordionDemo from "./accordion-demo";

import styles from './style.module.css'

const data = [
  {
    id: 1,
    title: 'What are accordion components?',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quasi amet, maiores velit, tempore laborum, libero earum ea iusto cumque eligendi deserunt commodi fuga asperiores? Neque culpa debitis iste enim.',
  },
  {
    id: 2,
    title: 'What are used for?',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda libero earum ea iusto cumque eligendi deserunt commodi fuga asperiores? Neque culpa debitis iste enim.',
  },
  {
    id: 3,
    title: 'Accordion as a musical instrument',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quasi amet, maiores velit, tempore laborum, Neque culpa debitis iste enim.',
  },
  {
    id: 4,
    title: 'Can I create an accordion component with a different framework?',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
]

export default function Accordion() {
  return (
    <div className={styles.container}>
      <AccordionDemo items={[...data]} />
    </div>
  )
}
