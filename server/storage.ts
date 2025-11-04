import { type User, type InsertUser, type ContactInquiry, type InsertContactInquiry, type CareerApplication, type InsertCareerApplication } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  createCareerApplication(application: InsertCareerApplication & { resumeUrl?: string }): Promise<CareerApplication>;
  getAllContactInquiries(): Promise<ContactInquiry[]>;
  getAllCareerApplications(): Promise<CareerApplication[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactInquiries: Map<string, ContactInquiry>;
  private careerApplications: Map<string, CareerApplication>;

  constructor() {
    this.users = new Map();
    this.contactInquiries = new Map();
    this.careerApplications = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = randomUUID();
    const inquiry: ContactInquiry = {
      ...insertInquiry,
      id,
      submittedAt: new Date(),
    };
    this.contactInquiries.set(id, inquiry);
    return inquiry;
  }

  async createCareerApplication(insertApplication: InsertCareerApplication & { resumeUrl?: string }): Promise<CareerApplication> {
    const id = randomUUID();
    const application: CareerApplication = {
      ...insertApplication,
      id,
      resumeUrl: insertApplication.resumeUrl || null,
      submittedAt: new Date(),
    };
    this.careerApplications.set(id, application);
    return application;
  }

  async getAllContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values());
  }

  async getAllCareerApplications(): Promise<CareerApplication[]> {
    return Array.from(this.careerApplications.values());
  }
}

export const storage = new MemStorage();
