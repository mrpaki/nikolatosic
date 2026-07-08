export type Status = 'podijum' | 'bodovi' | 'sledeca' | 'predstoji'
export type LapColor = 'best' | 'pb' | null

export interface Runda {
  runda: number
  staza: string
  zemlja: string
  datum: string
  status: Status
  pozicija: string | null
  najbrziKrug: string | null
  lapColor: LapColor
  finale?: boolean
}

export const sezona2026: Runda[] = [
  {
    runda: 1,
    staza: 'NOGARO',
    zemlja: 'Francuska',
    datum: '04–06. APR',
    status: 'podijum',
    pozicija: 'P3',
    najbrziKrug: '1:34.812',
    lapColor: 'pb',
  },
  {
    runda: 2,
    staza: 'PAUL RICARD',
    zemlja: 'Francuska',
    datum: '24–26. APR',
    status: 'bodovi',
    pozicija: 'P6',
    najbrziKrug: '2:03.451',
    lapColor: null,
  },
  {
    runda: 3,
    staza: 'MAGNY-COURS',
    zemlja: 'Francuska',
    datum: '29–31. MAJ',
    status: 'podijum',
    pozicija: 'P3',
    najbrziKrug: '2:04.703',
    lapColor: 'best',
  },
  {
    runda: 4,
    staza: 'MUGELLO',
    zemlja: 'Italija',
    datum: '10–12. JUL',
    status: 'sledeca',
    pozicija: null,
    najbrziKrug: null,
    lapColor: null,
  },
  {
    runda: 5,
    staza: 'SPA-FRANCORCHAMPS',
    zemlja: 'Belgija',
    datum: '17–19. SEP',
    status: 'predstoji',
    pozicija: null,
    najbrziKrug: null,
    lapColor: null,
  },
  {
    runda: 6,
    staza: 'NAVARRA',
    zemlja: 'Španija',
    datum: '16–18. OKT',
    status: 'predstoji',
    pozicija: null,
    najbrziKrug: null,
    lapColor: null,
  },
  {
    runda: 7,
    staza: 'PORTIMÃO',
    zemlja: 'Portugal',
    datum: '27–29. NOV',
    status: 'predstoji',
    pozicija: null,
    najbrziKrug: null,
    lapColor: null,
    finale: true,
  },
]
