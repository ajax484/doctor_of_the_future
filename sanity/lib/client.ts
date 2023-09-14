import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skL8VnhPVCpolcyOHrVmCtwF0lmWLKYGsGexJYE1rRr7L6KPasbal6k4bbq2PSn8a8tIVkYiMajy949s73IkhPm5d3kq0TLUYumFDypSRNhLvzDJSl2WK1geJQymNozIINyswHloVOT1A9uORktObZYAJRtrDDwOv1zVrohl0tsVanlr0GTT"
})
