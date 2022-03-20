import { memo } from "react";
import constants from "../config/constants";
import { StyledPersonaCardInfo } from "../styles/StyledPersonaCardInfo";

const PersonaCardInfo = ({ persona }) => {
	const {
		HOST,
		SIZE: {
			POSTER: { DEFAULT, NO_POSTER }
		}
	} = constants.IMAGE;

	return (
		<StyledPersonaCardInfo>
			<div className="info-content">
				<img
					src={
						persona.profile_path
							? `${HOST}${DEFAULT}${persona.profile_path}`
							: NO_POSTER
					}
					loading="lazy"
					alt={persona.name}
				/>
				<span className="persona-name">{persona.name}</span>
				<span className="persona-character">{persona.character}</span>
			</div>
		</StyledPersonaCardInfo>
	);
};

const MemoizedPersonaCardInfo = memo(PersonaCardInfo);
export default MemoizedPersonaCardInfo;
