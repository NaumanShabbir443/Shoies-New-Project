import Rating from '@mui/material/Rating';

export default function RatingComponent() {
    return (
        <div>
            <Rating name="size-medium" defaultValue={2} />
            <span>4.5/5</span>
        </div>
    );
}
