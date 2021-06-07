import { api } from '.'

export const GetCombos = async () => {
  const response = await api({
    method: 'GET',
    url: '/combo',
  })
  return response
}

export const GetCombo = async (options: { idCombo: string }) => {
  const response = await api({
    method: 'GET',
    url: `/combo/${options.idCombo}`,
  })
  return response
}
