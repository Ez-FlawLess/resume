import { FC } from "react";
import EmailIcon from "../../icons/Email";
import LocationIcon from "../../icons/Location";
import PhoneIcon from "../../icons/Phone";

interface ContactInfoItemI {
    icon: FC<{
        className: string,
    }>,
    text: string,
}

const CONTACT_INFO_ITEMS: ContactInfoItemI[] = [
    {
        icon: EmailIcon,
        text: "amirali23mohammadi2@gmail.com",
    },
    {
        icon: PhoneIcon,
        text: "+98 912 807 7891",
    },
    {
        icon: LocationIcon,
        text: "Tehran, Iran"
    },
]

const ContactInfoItem: FC<ContactInfoItemI> = props => (
    <div className="flex justify-center items-center gap-x-2">
        {props.icon({
            className: "h-4",
        })}
        <div className="text-base text-text-color">
            {props.text}
        </div>
    </div>
)

const ContactInfo: FC = () => {
    return (
        <div className="flex items-center justify-start gap-x-24">
            {CONTACT_INFO_ITEMS.map(item => (
                <ContactInfoItem
                    key={item.text}
                    {...item}
                />
            ))}
        </div>
    )
}

export default ContactInfo