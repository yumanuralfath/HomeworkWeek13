import {
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";

const BooksCard = () => {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTLQmRIanykeig6b8118EZ7rZf2ht-JoE5mRv2gagIBA&s"
          alt="Dan Abramov"
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>OSAKA YA!</PopoverHeader>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default BooksCard;
