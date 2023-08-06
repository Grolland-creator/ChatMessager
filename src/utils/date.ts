export const formatDateToMinute = (date: number) => {
   return Intl.DateTimeFormat(navigator.language, {minute: 'numeric', hour: 'numeric'}).format(+`${date}000`)
}

export const formatDateToDay = (date: number) => {
   return Intl.DateTimeFormat('ru', {day: 'numeric', month: 'numeric', year: 'numeric' }).format(+`${date}000`)
}