import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-neutral-700 border-neutral-400">Презентация</Badge>,
    title: "Идея, которую стоит увидеть.",
    showButton: true,
    buttonText: 'Смотреть презентацию'
  },
  {
    id: 'about',
    title: 'О проекте',
    content: 'Здесь — краткий рассказ о вашей идее: что это, какую задачу решает и почему это важно именно сейчас.'
  },
  {
    id: 'features',
    title: 'Ключевые моменты',
    content: 'Главные тезисы презентации в эффектных fullscreen-секциях — наглядно, ярко и по делу.'
  },
  {
    id: 'materials',
    title: 'Материалы',
    content: 'Все файлы и слайды презентации собраны в одном месте — удобно посмотреть и скачать.',
    showButton: true,
    buttonText: 'Скачать презентацию'
  },
  {
    id: 'contact',
    title: 'Свяжитесь с нами',
    content: 'Понравилась презентация? Оставьте контакт — расскажем подробнее и ответим на вопросы.',
    showButton: true,
    buttonText: 'Связаться'
  },
]