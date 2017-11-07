import { IResumeSectionTechnicalDetail } from './IResumeSectionTechnicalDetail';


export interface IResumeSectionTechnical {
    Id: number;
    Section: string;
    Details: IResumeSectionTechnicalDetail[];
}
