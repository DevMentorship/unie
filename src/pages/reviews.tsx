import { client } from '@/lib/client';

export interface IReview {
  review: string;
}

const Reviews = ({ reviews }: { reviews: IReview[] }) => <Reviews reviews={[]} />;

export default Reviews;

export const getStaticProps = async () => {
  const query = `{
      "reviews": *[_type == "reviews"] ,
    }`;
  const { reviews: result } = await client.fetch(query);
};
