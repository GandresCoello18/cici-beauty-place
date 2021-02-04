export const StatusColorCoupons = (status: string): string => {
  switch (status) {
    case 'No valido aun':
      return 'bg-warning'
    case 'Valido':
      return 'bg-success'
    case 'Usado':
      return 'bg-secondary'
    case 'Expirado':
      return 'bg-danger'
    default:
      return ''
  }
}
