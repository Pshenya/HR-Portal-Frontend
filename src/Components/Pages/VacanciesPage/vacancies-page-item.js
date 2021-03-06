import React from "react";
import {Link} from "react-router-dom";
import {ROUTES} from "../../../Routes/routes";
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import { formatDate } from "../../Helpers"
import Loading from "../../Loading/loading";
import ErrorIndicator from "../../ErrorIndicator/error-indicator";


const VacanciesPageItem = ({vacancy, loading}) => {
    if (loading) {
        return (
            <div className="page-loading">
                <Loading/>
            </div>
        );
    }
    else return (
        <Link to={`${ROUTES.VACANCY_DETAILS}/${vacancy._id}`} className="disable-link-styles">
            <article className="vac-card">
                <div className="vac-card-body">
                    <div className="card-main-content">
                        <div className="common-info">
                            <h3 className="vac-card-title">{vacancy.heading}</h3>
                            <p className="company-name">{vacancy.company}</p>
                            <span className="vac-card-salary">$ {vacancy.salary}</span>
                            <span className="vac-card-location">
                                                <RoomOutlinedIcon style={{marginRight: '5px', color:'#EA3C53'}}/>
                                {vacancy.region}
                                            </span>
                        </div>
                    </div>
                    <div dangerouslySetInnerHTML={{__html: vacancy.description}} className="vac-card-description">
                    </div>
                </div>
                <div className="vac-card-footer">
                    <div className="publication-time">
                        {formatDate(vacancy.date)}
                    </div>
                </div>
            </article>
        </Link>
    )

};

export default VacanciesPageItem;
