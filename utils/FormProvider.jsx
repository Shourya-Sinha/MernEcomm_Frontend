import {FormProvider as Form} from 'react-hook-form';

import PropTypes from 'prop-types';


FormProvider.protoTypes ={
    children:PropTypes.node,
    methods : PropTypes.object,
    onsubmit:PropTypes.func,
};

export default function FormProvider({ children, methods, onSubmit}){
    return(
        <Form {...methods}>
            <form onSubmit={onSubmit}>{children}</form>
        </Form>
    );
}