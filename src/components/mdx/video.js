export default function Video({ width, category, post }) {
  return (
    <video style={{ borderRadius: '10px' }} controls width={width || 890}>
      <source
        src={`/assets/videos/content/${category}/${post}`}
        type="video/mp4"
      />
      Sorry, your browser doesn't support embedded videos.
    </video>
  )
}
