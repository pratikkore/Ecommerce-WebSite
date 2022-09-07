import { BehaviorSubject } from 'rxjs';

const subject = new BehaviorSubject(0);

 const dataService = {
    setData: d => subject.next({ value: d }),
    getData: () => subject.asObservable()
};

export { subject,dataService}