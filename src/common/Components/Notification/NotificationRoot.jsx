import Notification from "./Notification"

export default function NotificationRoot({ data }) {
  return (
    <div className="notification">
      <div className="notification__inner">
        {
          data && data.map((item, index) => {
            return (
              <Notification key={index} {...item} />
            )
          })
        }
      </div>
    </div>
  )
}
