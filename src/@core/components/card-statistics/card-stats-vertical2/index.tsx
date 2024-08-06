import React from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Image from 'next/image'

// ** Type Import
interface CardStatsVerticalProps {
  sx?: object
  imgSrc: string
  title: string
}

const CardStatsVertical2 = (props: CardStatsVerticalProps) => {
  const { sx, imgSrc, title } = props

  return (
    <Card sx={{ ...sx }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Image
          src={imgSrc}
          alt={title}
          width={100}
          height={100}
          style={{ borderRadius: '8px', marginBottom: '16px' }}
        />
        <Typography variant='h5'>{title}</Typography>
      </CardContent>
    </Card>
  )
}

export default CardStatsVertical2
