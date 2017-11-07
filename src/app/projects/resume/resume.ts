import { IResumeSectionTechnical } from './technical/IResumeSectionTechnical';
import { IResumeSectionExperience } from './experience/IResumeSectionExperience';
import { IResumeSectionCertification } from './certification/IResumeSectionCertification';
import { IResumeSectionEducation } from './education/IResumeSectionEducation';
import { IResumeSectionWebsite } from './website/IResumeSectionWebsite';

export class Resume {
    Technical: IResumeSectionTechnical[];
    Experience: IResumeSectionExperience[];
    Certification: IResumeSectionCertification[];
    Education: IResumeSectionEducation;
    Website: IResumeSectionWebsite;
}
