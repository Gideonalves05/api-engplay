abstract class UserRepository{
    abstract create(id: number,
        firstName: String,
        lastName: String,
        email: String,
        password: String
    ): Promise<void>;
}