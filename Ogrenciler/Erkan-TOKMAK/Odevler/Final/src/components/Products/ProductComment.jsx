import { formatDate } from "@/lib/helpers";
import { CommentText, PostedDateText, StyledIcon } from "@/styles/CommentStyle";
import { Rating } from "@smastrom/react-rating";
import { useTranslations } from "next-intl";
import Image from "next/image";


const ProductComment = ({ data }) => {
  const t = useTranslations();
  return (
    <div className="col-12 col-md-6">

      <div className="rounded-4 border p-3 mb-4 p-4">
        <div className="d-flex justify-content-between">

          <Rating
            style={{ maxWidth: 100 }}
            value={data.rating}
            className="py-1"
            readOnly
          />
          <StyledIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="6" viewBox="0 0 22 6" fill="none">
              <path d="M13.625 3C13.625 3.51918 13.471 4.02669 13.1826 4.45837C12.8942 4.89005 12.4842 5.2265 12.0045 5.42518C11.5249 5.62386 10.9971 5.67585 10.4879 5.57456C9.97869 5.47328 9.51096 5.22327 9.14385 4.85616C8.77673 4.48904 8.52673 4.02131 8.42544 3.51211C8.32415 3.00291 8.37614 2.47511 8.57482 1.99546C8.7735 1.5158 9.10995 1.10583 9.54163 0.817392C9.97331 0.528953 10.4808 0.375 11 0.375C11.6962 0.375 12.3639 0.651562 12.8562 1.14384C13.3484 1.63613 13.625 2.30381 13.625 3ZM3.5 0.375C2.98083 0.375 2.47331 0.528953 2.04163 0.817392C1.60995 1.10583 1.2735 1.5158 1.07482 1.99546C0.876137 2.47511 0.824154 3.00291 0.92544 3.51211C1.02673 4.02131 1.27673 4.48904 1.64385 4.85616C2.01096 5.22327 2.47869 5.47328 2.98789 5.57456C3.49709 5.67585 4.02489 5.62386 4.50455 5.42518C4.9842 5.2265 5.39417 4.89005 5.68261 4.45837C5.97105 4.02669 6.125 3.51918 6.125 3C6.125 2.30381 5.84844 1.63613 5.35616 1.14384C4.86387 0.651562 4.19619 0.375 3.5 0.375ZM18.5 0.375C17.9808 0.375 17.4733 0.528953 17.0416 0.817392C16.61 1.10583 16.2735 1.5158 16.0748 1.99546C15.8761 2.47511 15.8242 3.00291 15.9254 3.51211C16.0267 4.02131 16.2767 4.48904 16.6438 4.85616C17.011 5.22327 17.4787 5.47328 17.9879 5.57456C18.4971 5.67585 19.0249 5.62386 19.5045 5.42518C19.9842 5.2265 20.3942 4.89005 20.6826 4.45837C20.971 4.02669 21.125 3.51918 21.125 3C21.125 2.65528 21.0571 2.31394 20.9252 1.99546C20.7933 1.67698 20.5999 1.3876 20.3562 1.14384C20.1124 0.900091 19.823 0.706735 19.5045 0.574816C19.1861 0.442897 18.8447 0.375 18.5 0.375Z" fill="black" fillOpacity="0.4" />
            </svg>
          </StyledIcon>
        </div>
        <h5 className="fw-bold my-2 d-flex gap-2">
          {data.username}
          <StyledIcon>
            <Image
              src="/assets/icons/icon-check.png"
              alt="verified"
              className="object-fit-contain"
              fill
            />
          </StyledIcon>
        </h5>
        <CommentText>
          {data.comment}
        </CommentText>
        <PostedDateText>
          {t('postedOn')} {formatDate(data.date)}
        </PostedDateText>
      </div>
    </div>
  );
};

export default ProductComment;