import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Student from "App/Models/Student"

export default class StudentsController {
    public static async index(ctx: HttpContextContract) {

        const allStudents = await Student.all()
        return allStudents;
    }
    public static async getAll(ctx: HttpContextContract) {

        console.log(ctx.request.body)
    }

}
