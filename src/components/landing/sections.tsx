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

]