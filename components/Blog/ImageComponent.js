
import imageUrlBuilder from '@sanity/image-url'
import {client} from '@/backend/SanityClient';
import {getImageDimensions} from '@sanity/asset-utils'

const ImageComponent = ({value}) => {
    const builder = imageUrlBuilder(client)
    function urlFor(source) {
        return builder.image(source)
      }
    const {width, height} = getImageDimensions(value)
    return (
      <img
        src={urlFor(value).width(width).fit('max').auto('format').url()}
        alt={value.alt || ' '}
        loading="lazy"
        style={{
          // Avoid jumping around with aspect-ratio CSS property
        }}
      />
    )
}

export default ImageComponent