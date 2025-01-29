import { useRef } from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  position: relative;
  width: 90%;
  margin: 20px auto;
  overflow: hidden;
  background-color: #004080;
  padding: 20px;
  border-radius: 10px;
    
`;

const Slider = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Приховуємо стандартний скрол */
  
  &::-webkit-scrollbar {
    display: none; /* Ховаємо скролбар для Chrome */
  }
`;

const SliderItem = styled.div`
  flex: 0 0 auto;
  width: 150px;
  text-align: center;
  color: white;
`;

const ActorImage = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

const ActorName = styled.p`
  font-weight: bold;
  margin-top: 5px;
`;

const ActorCharacter = styled.p`
  font-size: 12px;
  opacity: 0.8;
`;

const SliderButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 39, 77, 0.5);
    border: none;
    font-size: 24px;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;
    transition: 0.3s;

    &:hover {
        background: rgba(255, 165, 0, 0.5);
    }

    ${(props) => (props.left ? "left: 10px;" : "right: 10px;")}
`;

export const CastSlider = ({ cast }) => {
    const imageBaseUrl = "https://image.tmdb.org/t/p/w200";
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -600, behavior: "smooth" });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 600, behavior: "smooth" });
    };

    return (
        <SliderContainer>
            <SliderButton left onClick={scrollLeft}>&lt;</SliderButton>
            <Slider ref={sliderRef}>
                {cast.map((member) => (
                    <SliderItem key={member.id}>
                        {member.profile_path && <ActorImage
                            src={`${imageBaseUrl}${member.profile_path}`}
                            alt={member.name}
                        />}
                        <ActorName>{member.name}</ActorName>
                        <ActorCharacter>{member.character}</ActorCharacter>
                    </SliderItem>
                ))}
            </Slider>
            <SliderButton onClick={scrollRight}>&gt;</SliderButton>
        </SliderContainer>
    );
};
