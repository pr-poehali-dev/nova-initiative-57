import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'about',
    title: 'Трейлер',
    showButton: true,
    buttonText: 'Смотреть трейлер',
    buttonUrl: 'https://cloud.mail.ru/public/h51D/rMRtJC3k6',
    images: [
      'https://cdn.poehali.dev/projects/407aeb7d-ee5b-46b4-96c3-2b0a3a7bc4ae/bucket/6828d4f1-bd23-42d9-9c72-2e21045a5137.jpg',
      'https://cdn.poehali.dev/projects/407aeb7d-ee5b-46b4-96c3-2b0a3a7bc4ae/bucket/c0d5dc5a-acc1-4c5e-b2c3-494ef72cf033.jpg',
      'https://cdn.poehali.dev/projects/407aeb7d-ee5b-46b4-96c3-2b0a3a7bc4ae/bucket/a31dd5a6-5647-4b61-88af-8a4de530d291.jpg',
    ]
  },
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-neutral-700 border-neutral-400">Презентация</Badge>,
    title: "Презентация по теме «Что такое мемы и как они живут среди людей»",
    showButton: true,
    buttonText: 'Смотреть презентацию',
    buttonImage: 'https://cdn.poehali.dev/projects/407aeb7d-ee5b-46b4-96c3-2b0a3a7bc4ae/bucket/6c153733-b48d-427d-9919-10052b674321.jpg'
  },

]