/* eslint-disable react/no-unstable-nested-components */
// @ts-check
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { Virtuoso } from 'react-virtuoso'
import Typography from '@mui/material/Typography'

import Box from '@mui/material/Box'
import { WebhookSearch } from '@components/layout/dialogs/filters/AdvSearch'
import { Loading } from '@components/layout/general/Loading'

import TrackedTile from './tiles/TrackedTile'
import Selecting from './Selecting'
import { useGetWebhookData } from './hooks'

/**
 *
 * @param {{ category: Exclude<import('./store').WebhookStore['category'], 'human'> }} props
 * @returns
 */
const Tracked = ({ category }) => {
  const { t } = useTranslation()

  const { data: tracked, loading } = useGetWebhookData(category)

  return loading ? (
    <Loading>{t('loading', { category: t(category) })}</Loading>
  ) : (
    <>
      <Box pb={1}>
        <WebhookSearch />
      </Box>
      {tracked.length ? (
        <Virtuoso
          // @ts-ignore
          data={tracked}
          itemContent={(i) => <TrackedTile key={i} index={i} />}
          // useWindowScroll
        />
      ) : (
        <Box className="flex-center" height="100%">
          <Typography variant="h6">{t('no_alerts')}</Typography>
        </Box>
      )}
      <Selecting />
    </>
  )
}

export default Tracked
