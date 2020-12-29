import React from 'react'
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share'

interface Props {
  ShareUrl: string
}

const Share = ({ ShareUrl }: Props) => {
  return (
    <div className="row justify-content-start">
      <div className="col-2 col-lg-1">
        <WhatsappShareButton url={ShareUrl} openShareDialogOnClick>
          <WhatsappIcon size={35} borderRadius={15} />
        </WhatsappShareButton>
      </div>
      <div className="col-2 col-lg-1">
        <FacebookShareButton url={ShareUrl} openShareDialogOnClick>
          <FacebookIcon size={35} borderRadius={15} />
        </FacebookShareButton>
      </div>

      <div className="col-2 col-lg-1">
        <EmailShareButton url={ShareUrl} openShareDialogOnClick>
          <EmailIcon size={35} borderRadius={15} />
        </EmailShareButton>
      </div>

      <div className="col-2 col-lg-1">
        <TwitterShareButton url={ShareUrl} openShareDialogOnClick>
          <TwitterIcon size={35} borderRadius={15} />
        </TwitterShareButton>
      </div>

      <div className="col-2 col-lg-1">
        <TelegramShareButton url={ShareUrl} openShareDialogOnClick>
          <TelegramIcon size={35} borderRadius={15} />
        </TelegramShareButton>
      </div>
    </div>
  )
}

export default Share
