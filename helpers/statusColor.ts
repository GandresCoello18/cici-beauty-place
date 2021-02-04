export const StatusColorCoupons = (status: string): string => {
  switch (status) {
    case 'Pendiente':
      return 'bg-warning'
    default:
      return ''
  }
}
