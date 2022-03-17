/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DiscriminatorComplex } from '../models/DiscriminatorComplex';
import type { DiscriminatorSimple } from '../models/DiscriminatorSimple';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DefaultService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get discriminator simple
     * @returns DiscriminatorSimple Get discriminator simple
     * @throws ApiError
     */
    public getDiscriminatorSimple(): CancelablePromise<DiscriminatorSimple> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/discriminator-simple',
        });
    }

    /**
     * Get discriminator complex
     * @returns DiscriminatorComplex Get discriminator complex
     * @throws ApiError
     */
    public getDiscriminatorComplex(): CancelablePromise<DiscriminatorComplex> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/discriminator-complex',
        });
    }

}