import { getUrlParam } from '@/utils/helper'
const ticket = getUrlParam('ticket')

/**
 * 示意
 */
export const GET_BASE_INDEX = `/base/index?ticket=${ticket}`
