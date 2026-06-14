import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-neutral-700 border-neutral-400">Презентация</Badge>,
    title: "Идея, которую стоит увидеть.",
    showButton: true,
    buttonText: 'Смотреть презентацию',
    buttonImage: 'https://cdn.poehali.dev/projects/407aeb7d-ee5b-46b4-96c3-2b0a3a7bc4ae/bucket/6c153733-b48d-427d-9919-10052b674321.jpg'
  },
  {
    id: 'about',
    title: 'Доклад',
    content: 'Тема: Что такое мемы и как они живут среди людей'
  },

]